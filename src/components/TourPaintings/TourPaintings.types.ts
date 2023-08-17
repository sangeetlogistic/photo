export interface ITourPaintings {
    title: string;
    content?: JSX.Element | string;
    btnTitle: string;
    reviewTitle: JSX.Element | string;
    rate: number;
    totalReviews: number;
    bannerVideo: string;
    poster?: string;
    onClick?: () => void;
    [x: string]: any;
}
