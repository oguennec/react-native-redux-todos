import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  color: ownProps.color,
  iconName: ownProps.iconName,
  underlayColor: ownProps.underlayColor,
  reverseColor: ownProps.reverseColor,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);

export default FilterLink;
