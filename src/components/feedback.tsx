interface IFeedbackProps {
    feedback: string;
    author: string;
}
export function Feedback({feedback, author} : IFeedbackProps) {
    return (
        <div className="flex flex-col w-48"> 
                <p className="text-white text-sm italic">" {feedback} " </p>
                <p className="text-white font-bold text-sm mt-4">{author}</p>
        </div>
    );
}