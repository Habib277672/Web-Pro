import React, { useState, useEffect } from "react";
import {
  BadgeCheck,
  Users,
  Briefcase,
  Star,
  Award,
  CalendarCheck,
} from "lucide-react";

const ESTABLISHMENT_DATE = new Date("May 13, 1989 00:00:00");

const calculateTimeDifference = () => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - ESTABLISHMENT_DATE) / 1000);
  const years = Math.floor(diffInSeconds / (365.25 * 24 * 60 * 60));
  const remainingSecondsAfterYears = diffInSeconds % (365.25 * 24 * 60 * 60);
  const days = Math.floor(remainingSecondsAfterYears / (24 * 60 * 60));
  const remainingSecondsAfterDays = remainingSecondsAfterYears % (24 * 60 * 60);
  const hours = Math.floor(remainingSecondsAfterDays / (60 * 60));
  const remainingSecondsAfterHours = remainingSecondsAfterDays % (60 * 60);
  const minutes = Math.floor(remainingSecondsAfterHours / 60);
  const seconds = remainingSecondsAfterHours % 60;
  return { years, days, hours, minutes, seconds };
};

const STATS_DATA = [
  {
    icon: CalendarCheck,
    num: "36+",
    label: "Years in Business",
    isDynamic: true,
  },
  { icon: Award, num: "1250+", label: "Successful Events" },
  { icon: Users, num: "240800+", label: "Satisfied Clients" },
  { icon: Briefcase, num: "1750+", label: "Media Partners" },
  { icon: Star, num: "1374+", label: "Platinum Partners" },
  { icon: BadgeCheck, num: "1340+", label: "Other Supporters" },
];

export function StatsAndVideo() {
  const [time, setTime] = useState(calculateTimeDifference());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeDifference());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const establishedDateText = `Datamatix Established Since: May 13, 1989 ${
    time.years
  } years ${time.months || 5} months ${time.days} days ${time.hours} hours ${
    time.minutes
  } minutes ${time.seconds} seconds`;

  return (
    <>
      <style>
        {`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* === STATS SECTION === */
        .stats-section {
          background-color: #fff;
          padding: 40px 0 10px 0;
        }

        .stats-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          color: #333;
          font-size: 0.9rem;
          margin-bottom: 30px;
        }

        .gallery-button {
          background-color: #000;
          color: #fff;
          padding: 8px 18px;
          border-radius: 3px;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s ease;
        }
        .gallery-button:hover {
          background-color: #222;
        }

        .stats-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          padding: 20px 0;
          flex-wrap: wrap;
        }

        .stat-item {
          flex: 1;
          text-align: center;
          border-right: 1px solid #e5e5e5;
          padding: 10px 0;
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-item svg {
          width: 24px;
          height: 24px;
          margin-bottom: 10px;
          color: #777;
        }

        .stat-num {
          font-size: 1.8rem;
          font-weight: 700;
          color: #068149;
          margin-bottom: 5px;
        }

        .stat-item:first-child .stat-num {
          color: #068149;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666;
          font-weight: 500;
        }

        /* === DESCRIPTION === */
        .description-section {
          padding: 40px 0 30px 0;
        }

        .description-section h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
        }

        .description-section p {
          color: #333;
          line-height: 1.6;
        }

        .read-more {
          color: #068149;
          font-weight: 600;
          text-decoration: none;
        }
        .read-more:hover {
          text-decoration: underline;
        }

        /* === VIDEO === */
        .video-section {
          padding-bottom: 60px;
          background-color: #fff;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 6px;
          border: 1px solid #c7c7c7;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .stats-row {
            flex-wrap: wrap;
          }
          .stat-item {
            flex: 1 1 50%;
            border-right: none;
            border-bottom: 1px solid #eee;
          }
          .stat-item:nth-child(odd) {
            border-right: 1px solid #eee;
          }
          .stat-item:last-child {
            border-bottom: none;
          }
        }
        `}
      </style>

      <section className="stats-section">
        <div className="container">
          <div className="stats-header">
            <div>{establishedDateText}</div>
            <a href="#gallery" className="gallery-button">
              Photo Gallery
            </a>
          </div>

          <div className="stats-row">
            {STATS_DATA.map((stat, index) => (
              <div key={index} className="stat-item">
                <stat.icon />
                <div className="stat-num">
                  {index === 0 ? time.years + "+" : stat.num}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <h2>The East Asia Governments Platform</h2>
          <p>
            The Platform connects East Asia’s governments to concreate policy,
            share best practices, and accelerate institutional excellence. It
            advances cross-border collaboration in digital government, public
            finance, justice and rule of law, smart cities, and sustainable
            development enabling capable, transparent, and future-ready public
            institutions.{" "}
            <a href="#readmore" className="read-more">
              Read more
            </a>
          </p>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <div className="video-wrapper">
            <iframe
              title="Platform Video"
              src="https://www.youtube.com/embed/n_GBm43hWdY?rel=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
