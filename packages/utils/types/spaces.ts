interface Space {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

type Spaces = Space[];

// @ts-ignore
export { Space };
export default Spaces;
