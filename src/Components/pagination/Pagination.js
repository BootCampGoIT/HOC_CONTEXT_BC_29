import React, { Component } from 'react';


const stylesLI = {
    border: "1px solid black",
    width: "20px",
    height: "20px",
    margin: "10px",
    textAlign: "center",
    lineHeight: "20px",
    cursor: "pointer"

}
const stylesUL = {
    display: "flex",
    listStyle: "none",
    justifyContent: "center"
}




class Pagination extends Component {
    state = {
        data: ["Alex", "Nikita", "Maxim", "Valera", "Vlad"],
        perPage: 2,
        visibleData: [],
        blocksNumbers: [],
        currentBlock: 3
    }

    componentDidMount() {
        this.createPages()
    }

    getData = (e) => {
        const currentBlock = e.target.dataset.page;
        const {data, perPage} = this.state;
        const visibleData = data.slice((currentBlock * perPage - perPage), currentBlock * perPage);
        this.setState({visibleData, currentBlock})
    }

    createPages = () => {
        const { data, perPage } = this.state;
        const blocksCount = Math.ceil(data.length / perPage);
        const blocksNumbers = [];
        for (let i = 0; i < blocksCount; i += 1) {
            blocksNumbers.push(i + 1)
        }
        this.setState({blocksNumbers})
    }




    render() {
        const { visibleData , blocksNumbers} = this.state
        return (
            <>
                <ul >
                    {visibleData.map((item, idx )=> <li key={idx*10} >{item}</li>)}
                </ul>


                <ul style={stylesUL}>
                    {blocksNumbers.map((block, idx) => <li onClick={this.getData} data-page={block} style={stylesLI} key={idx}>{block}</li>)}
                </ul>


            </>

        );
    }
}

export default Pagination;