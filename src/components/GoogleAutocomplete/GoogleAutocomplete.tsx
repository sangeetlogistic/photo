import React, { useEffect, useRef } from 'react';

const GoogleAutocomplete = ({ handleSetAddress, Form, label, name, required = true, restrictedArea = false, status }: any) => {
    let autoComplete: any;
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        let componentRestrictions;
        if (restrictedArea) {
            componentRestrictions = {
                country: ['us', 'ca'],
            };
        }

        if (window.google && window.google.maps && window.google.maps.places) {
            autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current, {
                componentRestrictions,
            });

            autoComplete.setFields(['address_components', 'formatted_address', 'geometry']);
            autoComplete.addListener('place_changed', handlePlaceSelect);
        }
    }, []);

    const handlePlaceSelect = () => {
        const addressComponents = autoComplete.getPlace();

        const streetAddress = addressComponents.formatted_address;
        let countrySelect = '';
        let state = '';
        let city = '';
        let zipCode = '';

        addressComponents.address_components.forEach((component: any) => {
            if (component.types.includes('country')) {
                countrySelect = component.long_name;
            }

            if (component.types.includes('administrative_area_level_1')) {
                state = component.long_name;
            }

            if (component.types.includes('locality')) {
                city = component.long_name;
            }

            if (component.types.includes('postal_code')) {
                zipCode = component.long_name;
            }
        });

        handleSetAddress({ countrySelect, state, city, zipCode, streetAddress });
    };

    return (
        <>
            {status && (
                <Form.Item
                    label={label}
                    name={name}
                    rules={[
                        {
                            required,
                            message: 'Please input your Address!',
                        },
                    ]}
                >
                    <input className="ant-input" ref={autoCompleteRef} />
                </Form.Item>
            )}
        </>
    );
};

export default GoogleAutocomplete;
