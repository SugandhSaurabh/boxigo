import React, { Component } from 'react';
import './App.css';

import Axios from "axios";

import Cards from "./components/Cards";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      processedData: [],
    }
  }

  componentDidMount() {
    Axios.get('http://boxigo.in/sampleAPI.php').then(response => this.processData(response.data.Customer_Estimate_Flow));
  }

  processData(data) {
    let processedData = data.map(item => {

      let { moving_from, moving_to } = item;
      let from = moving_from.split(','), to = moving_to.split(',');
      let fromArea = from[0], fromCity = from[1];
      let toArea = to[0], toCity = to[1];
     //console.log(item.packing_service);
      return {
        userId: item.user_id,
        fromArea, fromCity, toArea, toCity,
        orderDate: item.date_created,
        movingDate: item.moving_on,
        propertySize: item.property_size,
        customState: item.custom_status,
        lRooms: item.items.rooms.living_room,
        bRooms: item.items.rooms.bed_room,
        kitchen: item.items.rooms.kitchen,
        others: item.items.rooms.others,
        oldFloor: item.old_floor_no,
        oldElevator: item.old_elevator_availability,
        packing: item.packing_service,
        oldParking: item.old_parking_distance,
        newParking: item.new_parking_distance,
        unpacking: item.unpacking_service,
        newElevator: item.new_elevator_availability,
        newFloor: item.new_floor_no,
      }
    });

    this.setState({processedData});
  }

  render() {
    return (
      <div>

        {/* navbar */}
        <div className = "nav">
          My Move Plans
        </div>

        {/* cards */}
        {this.state.processedData.map((data,index) => <Cards key={index}
          data={data}/>)}

      </div>
    );
  }

}

export default App;