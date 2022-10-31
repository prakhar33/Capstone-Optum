import { useState, useEffect } from "react";

const Notification =() => {

    const [data1, setData1] = useState('initial');
    useEffect(() => {
        const eventSource = new EventSource('http://localhost:9090/doctor/trial');

        eventSource.addEventListener("message", (event) => {
             const message = event.data;
             console.log(message);
          })

        eventSource.onopen = (e) => {
          console.log("SSE 3 Connected !");
        };

        // eventSource.addEventListener("user-list-event", (event) => {
        //   let jsonData = JSON.parse(event.data);
        //   setUsers(jsonData);
        // });

        return () => {
          eventSource.close();
        };


      }, []);

      return (
          <div>
              {data1}
          </div>
      )
}
export default Notification;