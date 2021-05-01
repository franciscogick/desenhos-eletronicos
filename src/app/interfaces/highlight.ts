export interface Highlight {
    id: number;
    type: string;
    start: number;
    end: number;
    text: string;
    containerElementId?: string;
    comment?: string;
    user?: string;
}
