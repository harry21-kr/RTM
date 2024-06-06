import React, { useEffect, useState } from 'react';
import UseFetchPosts from './hooks/UseFetchPosts';
import { ResponsiveCalendar } from '@nivo/calendar';

export function Calendar() {
  const posts = UseFetchPosts();
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    const data = posts.map((post) => ({ day: post.created_at.split('T')[0], value: 1 }));
    setCalendarData(data);
  }, [posts]);

  return (
    <ResponsiveCalendar
      data={calendarData}
      from="2024-01-01"
      to="2024-12-31"
      emptyColor="#eeeeee"
      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      monthLegendPosition="after"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left'
        }
      ]}
    />
  );
}
