import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import {fetchData} from '../../services/action';
import TableView from '../tableView';
import { typeOfFields } from '../tableView/TableView';

type DataViewProps = {
  receivedData: Array<typeOfFields>;
  isLoadingData: boolean;
  actions
}

const mapStateToProps = (state) => {
  return {
    receivedData: state.receivedData,
    isLoadingData: state.isLoadingData
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    fetchData
  },dispatch)
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

class DataView extends Component<DataViewProps> {  
  async componentDidMount() {
    const { actions } = this.props;
    await actions.fetchData();
  }
  render() {
    const {receivedData, isLoadingData} = this.props;
    return (
      isLoadingData ? (<CircularProgress color="secondary" />) :
      (<TableView receivedData={receivedData} />)
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataView);
