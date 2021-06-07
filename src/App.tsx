import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import { About, Header, Footer, Experience, Portfolio } from './Components';
import { ResumeData } from './ResumeDataTypes';

// For Google Analytics
const trackingCode = 'G-49ZT0R6PH8';

// eslint-disable-next-line @typescript-eslint/ban-types
type AppProps = {};

type AppState = {
    resumeData?: ResumeData
}

class App extends Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            resumeData: undefined,
        };

        ReactGA.initialize(trackingCode);
        ReactGA.pageview(window.location.pathname);
    }

    async getResumeData() {
        try {
            const response = await fetch('/resumeData.json');
            this.setState({
                resumeData: await response.json()
            });
        } catch (err) {
            console.log(err);
            alert(err);
        }
    }

    componentDidMount() {
        this.getResumeData();
    }

    renderApp = (data: ResumeData) => <div className="App">
        <Header basic={data.basic} socials={data.socials}/>
        <About basic={data.basic}/>
        <Experience experience={data.experience} skills={data.skills}/>
        <Portfolio projects={data.portfolio.projects}/>
        {/*<Testimonials data={this.state.resumeData.testimonials}/>*/}
        {/*<Contact data={this.state.resumeData.basic}/>*/}
        <Footer basic={data.basic} socials={data.socials}/>
    </div>;

    render() {
        if (this.state.resumeData) {
            return this.renderApp(this.state.resumeData);
        } else {
            return <div>Loading...</div>;
        }
    }
}

export default App;
