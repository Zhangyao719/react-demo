// * class 通过 connect 使用 redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '@/redux/action';

class Connect extends Component {
    setName = (name) => {
        this.props.setName(name)
    }
    render() {
        const { user } = this.props;
        return (
            <>
                <h2>class use react-redux by connect </h2>
                <div>来自 reducer 的 user.name: {user.name}</div>
                <button onClick={this.setName.bind(this, '周扒皮')}>dispatch action - setName</button>
            </>
        )
    }
}

// 需要渲染哪些数据
function mapStateToProps(state) {
    return {
        user: state.userReducer,
    };
}

// 需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        setName: (data) => dispatch(setName(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect);