import React, { useEffect, useState } from 'react';
import UseFetchPosts from './hooks/UseFetchPosts';
import { ResponsiveCalendar } from '@nivo/calendar';

export function Calendar() {
  const posts = UseFetchPosts();
  const [calendarData, setCalendarData] = useState([]);
  const dateCount = {};

  useEffect(() => {
    posts.forEach((post) => {
      const date = post.created_at.split('T')[0];
      if (dateCount[date]) {
        dateCount[date] += 1;
      } else {
        dateCount[date] = 1;
      }
    });

    const data = Object.keys(dateCount).map((date) => ({
      day: date,
      value: dateCount[date]
    }));

    setCalendarData(data);
  }, [posts]);

  return (
    <ResponsiveCalendar
      data={calendarData}
      from="2024-01-01"
      to="2024-12-31"
      emptyColor="#eeeeee"
      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
          itemWidth: 4,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left'
        }
      ]}
    />
  );
}
