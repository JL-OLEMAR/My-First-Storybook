/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Label contents
     */
    label: string;
    /**
     * How large should the Label be?
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
      * Should the label be rendered in uppercase?
     */
    allCaps?: boolean;
    /**
     * Set the color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
      * What background color should the label have?
     */
    backgroundColor?: string;
}
/**
  * Label component
 */
export declare const MyLabel: ({ label, size, allCaps, color, backgroundColor }: MyLabelProps) => JSX.Element;
