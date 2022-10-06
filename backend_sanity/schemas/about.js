export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'about',
            title: 'About',
            type: 'string',
        },
        {
            name: 'aboutDetail',
            title: 'About Detail',
            type: 'string',
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'recentTechs',
            title: 'Recent Techs',
            type: 'array',
            of: [
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                }
            ]
        },
        {
            name: 'resumeLink',
            title: 'Resume Link',
            type: 'string',
        },
    ]
}