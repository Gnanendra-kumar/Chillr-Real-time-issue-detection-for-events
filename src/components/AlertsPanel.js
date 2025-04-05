const AlertsPanel = ({ feedbackList }) => {
    const keywords = ['queue', 'audio', 'food'];
    const alerts = keywords.filter(kw =>
      feedbackList.filter(f => f.label === 'NEGATIVE' && f.text.toLowerCase().includes(kw)).length >= 2
    );
  
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded">
        {alerts.length > 0
          ? <p>⚠️ Complaints about: {alerts.join(', ')}</p>
          : <p>✅ No major complaints detected</p>}
      </div>
    );
  };
  
  export default AlertsPanel;
  