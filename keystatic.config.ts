import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        highlights: collection({
            label: 'Highlights',
            slugField: 'title',
            path: 'src/content/highlights/*',
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                icon: fields.text({ label: 'Font Awesome Icon Class' }),
                description: fields.text({ label: 'Description', multiline: true }),
            },
        }),
        spaces: collection({
            label: 'Spaces',
            slugField: 'title',
            path: 'src/content/spaces/*',
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                badge: fields.text({ label: 'Badge Text' }),
                price: fields.text({ label: 'Price' }),
                features: fields.array(
                    fields.object({
                        icon: fields.text({ label: 'Icon Class' }),
                        text: fields.text({ label: 'Feature Text' }),
                    }),
                    {
                        label: 'Features',
                        itemLabel: (props) => props.fields.text.value,
                    }
                ),
                buttonText: fields.text({ label: 'Button Text' }),
            },
        }),
        brands: collection({
            label: 'Brands',
            slugField: 'name',
            path: 'src/content/brands/*',
            schema: {
                name: fields.slug({ name: { label: 'Brand Name' } }),
                logo: fields.text({ label: 'Logo Text/Emoji' }),
            },
        }),
    },
    singletons: {
        hero: singleton({
            label: 'Hero Section',
            path: 'src/content/singletons/hero',
            schema: {
                eyebrow: fields.text({ label: 'Eyebrow Text' }),
                headline: fields.text({ label: 'Main Headline', multiline: true }),
                description: fields.text({ label: 'Description', multiline: true }),
                primaryButtonText: fields.text({ label: 'Primary Button Text' }),
                primaryButtonLink: fields.text({ label: 'Primary Button Link' }),
                secondaryButtonText: fields.text({ label: 'Secondary Button Text' }),
                secondaryButtonLink: fields.text({ label: 'Secondary Button Link' }),
                badges: fields.array(
                    fields.text({ label: 'Badge' }),
                    {
                        label: 'Hero Badges',
                        itemLabel: (props) => props.value,
                    }
                ),
            },
        }),
        highlightsSection: singleton({
            label: 'Highlights Section',
            path: 'src/content/singletons/highlights-section',
            schema: {
                tag: fields.text({ label: 'Section Tag' }),
                title: fields.text({ label: 'Section Title' }),
                subtitle: fields.text({ label: 'Section Subtitle', multiline: true }),
            },
        }),
        spacesSection: singleton({
            label: 'Spaces Section',
            path: 'src/content/singletons/spaces-section',
            schema: {
                tag: fields.text({ label: 'Section Tag' }),
                title: fields.text({ label: 'Section Title' }),
                subtitle: fields.text({ label: 'Section Subtitle', multiline: true }),
            },
        }),
        investment: singleton({
            label: 'Investment Section',
            path: 'src/content/singletons/investment',
            schema: {
                tag: fields.text({ label: 'Section Tag' }),
                title: fields.text({ label: 'Section Title' }),
                subtitle: fields.text({ label: 'Section Subtitle', multiline: true }),
                features: fields.array(
                    fields.object({
                        icon: fields.text({ label: 'Icon Class' }),
                        title: fields.text({ label: 'Feature Title' }),
                        description: fields.text({ label: 'Feature Description' }),
                    }),
                    {
                        label: 'Investment Features',
                        itemLabel: (props) => props.fields.title.value,
                    }
                ),
            },
        }),
        location: singleton({
            label: 'Location Section',
            path: 'src/content/singletons/location',
            schema: {
                tag: fields.text({ label: 'Section Tag' }),
                title: fields.text({ label: 'Section Title' }),
                subtitle: fields.text({ label: 'Section Subtitle', multiline: true }),
                address: fields.text({ label: 'Address', multiline: true }),
                connectivity: fields.array(
                    fields.object({
                        icon: fields.text({ label: 'Icon Class' }),
                        text: fields.text({ label: 'Connectivity Info' }),
                    }),
                    {
                        label: 'Connectivity Points',
                        itemLabel: (props) => props.fields.text.value,
                    }
                ),
            },
        }),
        contact: singleton({
            label: 'Contact Section',
            path: 'src/content/singletons/contact',
            schema: {
                tag: fields.text({ label: 'Section Tag' }),
                title: fields.text({ label: 'Section Title' }),
                subtitle: fields.text({ label: 'Section Subtitle', multiline: true }),
                phone: fields.text({ label: 'Phone Number' }),
                email: fields.text({ label: 'Email Address' }),
                whatsapp: fields.text({ label: 'WhatsApp Number' }),
            },
        }),
        payment: singleton({
            label: 'Payment Section',
            path: 'src/content/singletons/payment',
            schema: {
                tag: fields.text({ label: 'Section Tag' }),
                title: fields.text({ label: 'Section Title' }),
                subtitle: fields.text({ label: 'Section Subtitle', multiline: true }),
                plans: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Plan Name' }),
                        description: fields.text({ label: 'Plan Description' }),
                    }),
                    {
                        label: 'Payment Plans',
                        itemLabel: (props) => props.fields.name.value,
                    }
                ),
            },
        }),
    },
});
