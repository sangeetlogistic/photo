export interface IAfterBefore {
    title: string;
    firstContent?: string;
    seondContent?: string;
    btnText: string;
    leftImage: string;
    rightImage: string;
    percentShown?: number;
    onClick?: () => void;
    [x: string]: any;
}
