import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  const [callGoal, setCallGoal] = useState("");
  const [needToKnows, setNeedToKnows] = useState("");
  const [endCondition, setEndCondition] = useState("");

  const triggerOutboundCallAPI = async (to: any, from: any) => {
    try {
      const response = await fetch('https://75b2-2603-8081-2400-e0-5cc7-25fd-ed83-213e.ngrok-free.app/outbound', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to,
          from,
          goal: callGoal,
          n2k: needToKnows,
          end_condition: endCondition,
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Call initiated:', data);
      } else {
        console.error('Error initiating call:', response.statusText);
      }
    } catch (error) {
      console.error('Error initiating call:', error);
    }
  };

  return (
    <div className="1">
      <h1>Home</h1>
      <p>Goal</p>
      <input type="text" value={callGoal} onChange={(e) => setCallGoal(e.target.value)} />
      <p>Need to Knows</p>
      <input type="text" value={needToKnows} onChange={(e) => setNeedToKnows(e.target.value)} />
      <p>End Condition</p>
      <input type="text" value={endCondition} onChange={(e) => setEndCondition(e.target.value)} />
      <div>________________________________</div>
      <button onClick={() => triggerOutboundCallAPI("+15126567738", "+18888799239")}>
        Trigger Outbound Call to Me
      </button>
    </div>
  );
}

export default Home;
