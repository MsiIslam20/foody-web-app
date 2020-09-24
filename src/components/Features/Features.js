import React, { useState } from 'react';
import features from '../../fakedata/features'
import SingleFeature from './SingleFeature';

const Features = () => {
    const [feature, setFeature] = useState(features);
    return (
        <div className="features container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        {
                            feature.map(sf => <SingleFeature feature={sf} key={sf.id}></SingleFeature>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;