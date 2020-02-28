import React from "react";
import axios from "axios";

class FetchData extends React.Component {
   
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
    this.getdata();
  }

  getdata(){
    axios.get("http://boxigo.in/sampleAPI.php").then((response) => {
        console.log(response.data.Customer_Estimate_Flow);
        this.setState({data:response.data.Customer_Estimate_Flow})
      });
  }

  render() {
    return (
      null
    );
  }
}
  export default FetchData;