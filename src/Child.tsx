interface ChildProps {
    color: string;

}

const Child: React.FC<ChildProps> = ({color}) => {
    return <div>{color}</div>
}

export default Child;