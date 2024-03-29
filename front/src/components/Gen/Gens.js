import React from 'react';
import Actions from "../../actions";
import Gen from "./Gen";
import Aux from "../Aux";
import {connect} from "react-redux";
import Body from "../Body/Body";
import BackBtn from "../BackBtn/BackBtn";


class Gens extends React.Component {
    model_id = this.props.match.params.model_id;
    state = {
        body_id: this.props.match.params.body_id ? parseInt(this.props.match.params.body_id, 10) : null
    };

    componentDidMount() {
        Actions.getModel(this.model_id);
        window.addEventListener('resize', () => {
            this.forceUpdate()
        });
    }

    selectBody(body_id) {
        this.addUrl('/model/' + this.model_id + '/' + body_id);
        this.setState({body_id: body_id});
    }

    closeBody() {
        this.addUrl('/model/' + this.model_id + '/');
        this.setState({body_id: undefined});
    }

    addUrl(url) {
        if (this.props.history.location.pathname !== url) {
            this.props.history.push(url);
        }
    }

    imageLoad(e) {
        e.target.closest('.fader').classList.add('in');
    }

    backLoad(e) {
        e.target.nextSibling.classList.add('in');
    }

    render() {
        const {brand, model} = this.props;

        return (
            this.props.model &&
            <Aux>
                {brand && <BackBtn url={`#/brand/` + brand.id} text={brand.name}/>}
                {model.id === parseInt(this.model_id, 10) &&
                    model.gens.sort((a, b) => a.years < b.years ? -1 : 1).map(gen => <Gen
                    imageLoad={this.imageLoad}
                    backLoad={this.backLoad}
                    model_id={model.id}
                    selectBody={this.selectBody.bind(this)}
                    key={gen.id}
                    gen={gen}/>)}
                {model && this.state.body_id &&
                <Body body_id={this.state.body_id} onClose={this.closeBody.bind(this)}/>}
            </Aux>
        )
    }
}

export default connect(store => ({model: store.model, brand: store.brand}))(Gens);
