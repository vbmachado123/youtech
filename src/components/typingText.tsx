// import Typical from 'react-typical';
import Typed from "react-typed";

interface TypingTextProps {
    texts: string[];
}
export function TypingText({ texts }: TypingTextProps) {
    return(
        <Typed
      strings={texts}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
         
    );
}
