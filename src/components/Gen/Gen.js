import React from 'react';
import PropTypes from 'prop-types';
import './gen.css'
import Card from "../Card";
import RandomImage from "../RandomImage";
import BgRepeater from "../BgRepeater/BgRepeater";

const Gen = (props) => {
    return (
        <div className="row gen m-0 position-relative">
            <BgRepeater image={props.gen.bodies[0].images}/>
            <div className="col-12 col-lg-2 title">
                <div className={"name"}>{props.gen.name}</div>
                <div className={"years"}>{props.gen.years}</div>
            </div>
            <div className={"col-12 col-lg-10 p-0"}>
                <div className={"row m-0"}>
                    {props.gen.bodies.map(body =>
                        <div key={body.id}
                             className={"col-12 col-sm-6 col-md-4 p-0 pointer"} onClick={props.selectBody.bind(null, body.id)}>
                            <Card
                                title={body.name}>
                                <RandomImage object={body.images}/>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Gen.propTypes = {
    model_id: PropTypes.number,
    gen: PropTypes.object,
    selectBody: PropTypes.func,
};

export default Gen;