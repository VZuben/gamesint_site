export interface ModalProps {
    active: boolean;
    setActive: (active: boolean) => void;
    title: string;
    description: string;
    imagePath: string;
}