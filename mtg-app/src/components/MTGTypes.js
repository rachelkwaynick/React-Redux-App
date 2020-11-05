import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMTGTypes } from '../store/actions';

const MTGTypes = (props) => {
    useEffect(() => {
        props.fetchMTGTypes();
        
    }, []);

    return (
        <div>
            <h2>MTG Types</h2>

            {
                props.isLoading ? <p>Loading MTG Types</p> : null
            }

            {
                props.error ? <p>{props.error}</p> : null
            }

            <div>
                {props.types}
            </div>
            {
                props.types.map((type, idx) => {
                    return (
                        <div
                            key={idx}
                        >
                            <h4>{type}</h4>
                        </div>
                    ) 
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        types: state.mtgTypesData,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchMTGTypes })(MTGTypes)