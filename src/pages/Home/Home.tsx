import React, { useState, useEffect } from "react";
import * as S from "./style";

import { Heading } from "../../components/Heading";
import { TrafficEvent } from "../../components/TrafficEvent";

export function Home() {
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<any[]>([]);

  /**
   * Ideally, fetching should be handled otherwhere which could be in a state manager like redux or zustand
   * And the API url should be stored differently.
   * E.g.:
   *   - the API key should be stored in an environment/key file
   *   - the base URL should be stored in a variable
   *   - the filter properties should be appended to all above
   *   - Errors should be handled globally (Error 4xx page)
   */
  const fetchEvents = async () => {
    try {
      const res = await fetch(
        "http://api.511.org/traffic/events?api_key=eb040bd9-9756-4fca-a72a-bccdf2abb7ec&format=json"
      );
      if (res.ok) {
        const data = await res.json();
        setIsLoading(false);
        setEvents(data.events);
        console.log(data);
      } else {
        throw new Error("Error loading todos");
      }
    } catch (err) {
      setIsLoading(false);
      setErrors(prevErr => [...prevErr, err]);
    }
  };

  /**
   * Load once on page load
   */
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <S.Main>
        <Heading level={1}>Traffic Overview</Heading>
        <Heading level={3}>
          Your latest up to date traffic informer for the 511
        </Heading>
        <S.OverviewContainer>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <S.Overview>
                {/* Favorably, would like to order the events on the backend by severity */}
                {events.map(event => (
                  <TrafficEvent
                    key={event.id}
                    id={event.id}
                    title={event.event_subtypes[0]}
                    area={event.areas[0].name}
                    description={event.headline}
                    severity={event.severity}
                    latestUpdate={event.updated || event.created}
                  />
                ))}
              </S.Overview>
            </>
          )}
        </S.OverviewContainer>
      </S.Main>
    </div>
  );
}
