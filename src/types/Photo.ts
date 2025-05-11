export interface PhotoType {
    id: number;
    url: string
}

export type PhotoProps = {
    url: string;
    openModal: (url: string) => void;
}