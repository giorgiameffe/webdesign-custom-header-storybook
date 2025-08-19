export type LogoProps = {
    text: string;
}

export const Logo = ({ text }: LogoProps) => {

    return (
        <div>{text}</div>
    )
}