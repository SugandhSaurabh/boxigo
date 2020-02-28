import React from "react";
import "./css/cards.css";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
        }
    }

    componentDidMount() {
    }

    render() {
        let mainDiv = (
            <div>
                <div className="box">
                    <div className="uid">{this.props.data.userId}</div>

                    <div className="card-main">
                        <img alt="icon" style={{ height: "30px", width: "30px", backgroundColor: "grey" }} />
                        <div>{this.props.data.propertySize}</div>

                        <div style = {{width: ""}}>
                            <div style = {{
                                textAlign: "center",
                            }}>{this.props.data.movingDate}</div>
                            <div className="city">

                                <div>
                                    <div>{this.props.data.fromCity}</div>
                                    <div>{this.props.data.fromArea}</div>

                                </div>
                                <div>--------------------------------------------></div>
                                <div>
                                    <div>{this.props.data.toCity}</div>
                                    <div>{this.props.data.toArea}</div>
                                </div>
                            </div>
                            <button className="btn1" onClick={() => {
                                this.setState({ showDetails: true });
                            }}>View More Details</button>
                        </div>

                        <div style = {{
                            width: "15%"
                        }}>{this.props.data.customState}</div>
                    </div>

                    <div>Order Date :{this.props.data.movingDate}</div>
                </div>
            </div>
        );

        {/*detaied view */ }
        let detailedDiv = () => {
            let jsxRooms = (roomArray) => {

                let jsx = roomArray.map(roomItems => (
                    <div className="room-items">
                        <div>{roomItems[1]}</div>
                        <div>{roomItems[0]}</div>
                    </div>
                ))

                return (
                    <div className="room-container">
                        {jsx}
                    </div>
                );
            }

            let houseAreas = ['Living Room', 'Bed Room', 'Kitchen', 'Others'];

            return (
                <div>
                    <div className="item">Item Details</div>
                    <div className="Rooms">

                        {[this.props.data.lRooms, this.props.data.bRooms, this.props.data.kitchen, this.props.data.others]
                            .map((item, index) => {
                                return (
                                    <div>
                                        <div className="lr">{houseAreas[index]}</div>
                                        {jsxRooms(Object.entries(item))}
                                    </div>
                                );
                            })}
                    </div>
                    <div className="item1">
                        <div className="Ehouse">
                            <div className="dtls">Details of Existing house </div>

                            <div>Floor No. : </div>
                            <div>{this.props.data.oldFloor}</div>

                            <div>Elevator : </div>
                            <div className="el">{this.props.data.oldElevator}</div>
                            <div>Packing : </div>
                            <div className="el">{this.props.data.packing}</div>
                            <div>Approx distance door to truck : </div>
                            <div className="el">{this.props.data.oldParking}</div>
                        </div>
                        <div className="Nhouse">
                            <div className="dtls">Details of New house </div>
                            <div>Floor No. : </div>
                            <div>{this.props.data.newFloor}</div>
                            <div>Elevator : </div>
                            <div className="el">{this.props.data.newElevator}</div>
                            <div>Unpacking : </div>
                            <div className="el">{this.props.data.unpacking}</div>
                            <div>Approx distance door to truck : </div>
                            <div className="el">{this.props.data.newParking}</div>
                        </div>
                        <div><center><button className="btn1" onClick={() => {
                            this.setState({ showDetails: false });
                        }}>Back to My Move plan</button></center></div>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                {mainDiv}
                {this.state.showDetails === true && detailedDiv()}
            </React.Fragment>
        );
    }
}

export default Cards;