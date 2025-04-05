const FeedbackList = ({ feedback }) => (
    <div>
      {feedback.map((f, i) => (
        <div key={i} className="bg-white shadow p-2 m-2 rounded">
          <p><strong>{f.label}</strong> - {f.text}</p>
          <p>Confidence: {f.score}</p>
        </div>
      ))}
    </div>
  );
  
  export default FeedbackList;
  