import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import "./news.css";

const API = 'https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=10&apiKey=36007a47cc43451b84328b430b68e9ca';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({ articles: data.articles}));
    }

    render() {
        const {articles} = this.state;
        return (
            <div>
                <Navbar bg="dark" variant="dark" className="card">
                    <Navbar.Brand>Trending Health News</Navbar.Brand>
                </Navbar> 

                {articles.map(article =>
                    <Card className="card">
                        <Card.Body>
                            <Card.Title><a href={article.url}>{article.title}</a></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
                            <Card.Text>{article.description}</Card.Text>
                        </Card.Body>
                    </Card>    
                    
                    
                )}
            </div>

        )
    }
}



export default News;