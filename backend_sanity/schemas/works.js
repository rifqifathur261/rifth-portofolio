export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'string',
        },
        {
            name: 'works',
            title: 'Works',
            type: 'array',
            of: [{ type: 'workExperience' }],
        },
    ]
}