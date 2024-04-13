export interface GraphViewProps {
    handleActive: React.Dispatch<React.SetStateAction<boolean>>;
    handleTitle: React.Dispatch<React.SetStateAction<string>>;
    handleDescription: React.Dispatch<React.SetStateAction<string>>;
    handleImagePath: React.Dispatch<React.SetStateAction<string>>;
  }