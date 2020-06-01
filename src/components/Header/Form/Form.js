import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SEARCH_URL, SEARCH, FETCH_INTERVAL} from '../../config'
import './Form.css'
import Content from '../../Content/Content'
import LoaderButton from '../../LoaderButton/LoaderButton'
import {setLocalStorage, getLocalStorage} from '../../localStorage/localStorage'

let timer;

class Form extends Component {

    state = {
        inputValue: "",
        page: 1,
        results: undefined,
        allPages: 0
    }

    componentDidMount = () => {
        const searchHost = getLocalStorage(SEARCH)
        if(searchHost){
            this.setState({
                results: searchHost.results,
                allPages: searchHost.allPages,
                inputValue: searchHost.inputValue
            })
        }
    }

    valueTarget = ({ target }) => {
        this.setState({inputValue: target.value})
        clearTimeout(timer);
        if (target.value === "") {
            this.setState({ results: undefined, allPages: 0, page: 1})
            localStorage.removeItem(SEARCH);
            return
        }
        timer = setTimeout(this.doSearch.bind(this, target.value), FETCH_INTERVAL);
    }

    doSearch = async (val, nextPage = false) => {
        if(nextPage) {
            const url = `${SEARCH_URL(val)}&page=${nextPage}`;
            const fetched = await fetch(url);
            const data = await fetched.json();
            this.setState( state => {
                return {
                    results: [...state.results, ...data.results],
                    page: state.page + 1
                }
            })
        } else {
            const fetched = await fetch(SEARCH_URL(val));
            const data = await fetched.json();
            const newState = {
                results: [...data.results],
                allPages: data.total_pages,
                inputValue: val
            }
            this.setState(newState)
            setLocalStorage(SEARCH, newState)
        }

        return false
    }

    handlerLoading = () => {
        const nextPage = this.state.page + 1;
        this.doSearch(this.state.inputValue, nextPage)
    }

    handlerGoUp = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    leftData = () => {
        return this.state.allPages > this.state.page ? true : false
    }


    render() {
        return <>
            <form>
                <input
                type="search" value={this.state.inputValue}
                placeholder="Search film" aria-label="Search"
                onChange={this.valueTarget}
                />
            </form>
            {this.state.results
                ?
                <div>
                    <div>
                        {
                            this.state.results.length > 0
                                ?
                                <Content
                                    results={this.state.results}
                                    path="/"
                                />
                                :
                                "not found"
                        }
                    </div>
                </div>
                : ""
            }
            {
                this.state.results
                ?
                <LoaderButton
                    handlerLoading={this.handlerLoading}
                    handlerGoUp={this.handlerGoUp}
                    leftData={this.leftData}
                    data={this.state.results.length}
                />
                :
                ""
            }

        </>
    }
}

export default Form
