import './myLabel.css';

export interface MyLabelProps {
  /**
   * Label contents
   */
  label: string;
  /**
   * How large should the Label be?
   */
  size?: 'normal'|'h1'|'h2'|'h3';
  /**
    * Should the label be rendered in uppercase?
   */
  allCaps?: boolean;
  /**
   * Set the color of the label
   */
  color?: 'primary'|'secondary'|'tertiary';
  /**
    * What background color should the label have?
   */
  backgroundColor?: string;
}

/**
  * Label component
 */
export const MyLabel = ({
  label,
  size = 'normal', // Default props for this story
  allCaps = false,
  color = 'primary',
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

export default MyLabel;