export const getStatusValue = (key: any) => {
    const status: { [x: string]: string } = {
        '1': 'Waiting For Photo To Upload',
        '2': 'Photo Edit in Process',
        '3': 'Photo edit sent for approval',
        '4': 'Photo Sent For Modification',
        '5': 'Painting In Process',
        '6': 'Painting Sent For Approval',
        '7': 'Painting Sent For Modification',
        '8': 'Waiting For Final Payment',
        '9': 'Order Is Being Shipped',
        '10': 'Order Has Been Shipped',
        '11': 'Order Delivered',
        '12': 'Order Cancelled',
        '13': 'Order Cancelled Refund',
    };
    return status[key] || 'status code doesnt exist';
};

export const tipPercentages = [
    { id: 0, value: 'no tip' },
    { id: 5, value: '5%' },
    { id: 10, value: '10%' },
    { id: 20, value: '20%' },
    { id: 50, value: '50%' },
    { id: 100, value: '100%' },
];

export enum TabActiveKey {
    myOrder = 'MyOrder',
    personalDetails = 'PersonalDetails',
}
