import constants from "./constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    saveTestActions: (values) => ({
        type: constants.TEST_ACTION,
        values
    })

};