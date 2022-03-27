const { request, gql } = require('graphql-request');
const URL = 'https://api.wedives.com/graphql';

exports.handler = async (event) => {

    await main()

    return {
        statusCode: 200
    };
};

async function main() {
    await collectWaterTemperature()
}

async function collectWaterTemperature() {
    const mutation = gql`
        mutation Mutation {
            collectWaterTemperature {
                success
                reason
            }
        }
    `

    let result = await request(URL, mutation)
    console.log(JSON.stringify(result, undefined, 2))
}