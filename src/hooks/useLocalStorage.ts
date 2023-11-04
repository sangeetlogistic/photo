export const useLocalStorage = () => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const clear = (): void => {
            localStorage?.clear();
        };
        const getItem = (itemKey: string): string | null => localStorage?.getItem(`${itemKey}`);
        const key = (index: number): string | null => localStorage?.key(index);
        const removeItem = (itemKey: string): void => localStorage?.removeItem(`${itemKey}`);
        const setItem = (itemKey: string, value: string): void => localStorage?.setItem(`${itemKey}`, value);

        return {
            clear,
            getItem,
            key,
            removeItem,
            setItem,
        };
    }
    return null;
};
