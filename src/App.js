import React from 'react';
import icon1 from './icon1.png';
import './App.css';

function App() {
  const chart1 = ['75%', '45%', '75%', '85%'];
  const chart2 = ['50%', '35%', '68%'];
  const chart3 = ['50%', '35%', '68%'];
  const chartColor = ['#6B8E23', '#1A8CFF', '#FF6600', '#E6E600']; 

  return (
    <div className="App">
      <div className="container" style={{ marginTop: "10px"}} >
        <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="graph-card col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="top-card">
              <div className="img-box">
                <img className="card-icon" src={icon1} alt="" />
              </div>
              <div className="card-title">Engagement</div>
              <div className="chart1-percent" style={{color: chartColor[0]}}>
                {chart1[0]}
              </div>
              <div className="bar-empty">
                <div className="bar-filled" style={{backgroundColor: chartColor[0], width: chart1[0]}}></div>
              </div>
            </div>
          </div>
          <div className="graph-card col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="top-card">
              <div className="img-box">
                <img className="card-icon" src={icon1} alt="" />
              </div>
              <div className="card-title">Wellbeing</div>
              <div className="chart1-percent" style={{color: chartColor[1]}}>
                {chart1[1]}
              </div>
              <div className="bar-empty">
                <div className="bar-filled" style={{backgroundColor: chartColor[1], width: chart1[1]}}></div>
              </div>
            </div>
          </div>
          <div className="graph-card col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="top-card">
              <div className="img-box">
                <img className="card-icon" src={icon1} alt="" />
              </div>
              <div className="card-title">Turnover</div>
              <div className="chart1-percent" style={{color: chartColor[2]}}>
                {chart1[2]}
              </div>
              <div className="bar-empty">
                <div className="bar-filled" style={{backgroundColor: chartColor[2], width: chart1[2]}}></div>
              </div>
            </div>
          </div>
          <div className="graph-card col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="top-card">
              <div className="img-box">
                <img className="card-icon" src={icon1} alt="" />
              </div>
              <div className="card-title">Stress</div>
              <div className="chart1-percent" style={{color: chartColor[3]}}>
                {chart1[3]}
              </div>
              <div className="bar-empty">
                <div className="bar-filled" style={{backgroundColor: chartColor[3], width: chart1[3]}}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="container2 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h3 className="title">Celebrate</h3>
            <div className="card">
              <div className="bar-tags">
                <div className="tag1">Feedback</div>
                <div className="tag2">{chart2[0]}</div>
              </div>
              <div className="bar-empty">
                <div className="bar-filled" style={{backgroundColor: chartColor[0], width: chart2[0]}}></div>
              </div>
              <div className="bar-tags">
                <div className="tag1">Emotional Wellbeing</div>
                <div className="tag2">{chart2[1]}</div>
              </div>
              <div className="bar-empty">
                <div className="bar-filled" style={{backgroundColor: chartColor[1], width: chart2[1]}}></div>
              </div>
              <div className="bar-tags">
                <div className="tag1">Peer Support</div>
                <div className="tag2">{chart2[2]}</div>
              </div>
              <div className="bar-empty">
                <div className="bar-filled" style={{backgroundColor: chartColor[3], width: chart2[2]}}></div>
              </div>
            </div>
          </div>
          <div className="container3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h3 className="title">Focus on</h3>
            <div className="card3">
              <div className="vertical-bar graph-axis">
                <div>75</div>
                <div>50</div>
                <div>25</div>
                <div>0</div>
              </div>
              <div className="vertical-bar">
                <div className="bar-empty">
                  <div className="bar-filled" style={{backgroundColor: chartColor[3], height: chart3[0]}}>
                    <div className="bar-text" style={{top: chart3[0]}}>
                      {chart3[0]}
                    </div>
                  </div>
                </div>
                <div className="vertical-text">Turnover</div>
              </div>
              <div className="vertical-bar">
                <div className="bar-empty">
                  <div className="bar-filled" style={{backgroundColor: chartColor[1], height: chart3[1]}}>
                    <div className="bar-text" style={{top: chart3[1]}}>
                      {chart3[1]}
                    </div>
                  </div>
                </div>
                <div className="vertical-text">Stress</div>
              </div>
              <div className="vertical-bar">
                <div className="bar-empty">
                  <div className="bar-filled" style={{backgroundColor: chartColor[2], height: chart3[2]}}>
                    <div className="bar-text" style={{top: chart3[2]}}>
                      {chart3[2]}
                    </div>
                  </div>
                </div>
                <div className="vertical-text">Job Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
