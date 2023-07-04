const ProjectList = [
    {
        id: 1,
        title: 'CCTV Projects',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus aut natus repudiandae illo dignissimos cum, quidem, molestias officia impedit omnis, quas repellat totam nesciunt iusto modi a eligendi magni!',
        list1: 'Camera Booster',
        list2: 'Remote view with Phone',
        list3: 'Connect to Google Cloud',
        list4: 'Chat with your CCTV Assistant',
        image: 'https://image.made-in-china.com/2f0j00dvDiVjJMpzcK/Digital-Camera-Assembly-Line-Camera-Production-Line-for-Sale.jpg'
    },
    {
        id: 2,
        title: 'IoT/Automations Projects',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus aut natus repudiandae illo dignissimos cum, quidem, molestias officia impedit omnis, quas repellat totam nesciunt iusto modi a eligendi magni!',
        list1: 'Smart Home Installation with Alexa',
        list2: 'Controlling Circuit with Phone',
        list3: 'Touch Sensing Gadget',
        list4: 'Automatic Wastebin',
        additionalImage1: 'data:image/jpeg;base64,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',
        image: 'data:image/jpeg;base64,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'

    },
    {
        id: 3,
        title: 'Solar Projects',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus aut natus repudiandae illo dignissimos cum, quidem, molestias officia impedit omnis, quas repellat totam nesciunt iusto modi a eligendi magni!',
        list1: 'Building of Inverter',
        list2: 'Mini Grid',
        list3: 'Solar Washing Machine',
        list4: 'Design of PWM Charge Controller',
        image: 'https://image.made-in-china.com/2f0j00dvDiVjJMpzcK/Digital-Camera-Assembly-Line-Camera-Production-Line-for-Sale.jpg'

    },
    {
        id: 4,
        title: 'Electrical Projects',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus aut natus repudiandae illo dignissimos cum, quidem, molestias officia impedit omnis, quas repellat totam nesciunt iusto modi a eligendi magni!',
        list1: 'Camera Booster',
        list2: 'Remote view with Phone',
        list3: 'Connect to Google Cloud',
        list4: 'Chat with your CCTV Assistant',
        image: 'https://image.made-in-china.com/2f0j00dvDiVjJMpzcK/Digital-Camera-Assembly-Line-Camera-Production-Line-for-Sale.jpg'

    },
    {
        id: 5,
        title: 'Inverter Projects',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus aut natus repudiandae illo dignissimos cum, quidem, molestias officia impedit omnis, quas repellat totam nesciunt iusto modi a eligendi magni!',
        list1: '2.5KVA Inverter',
        list2: '1.5KVA Inverter',
        list3: 'Inverter Powered Grid',
        list4: 'Inverter Tracker',
        image: 'https://image.made-in-china.com/2f0j00dvDiVjJMpzcK/Digital-Camera-Assembly-Line-Camera-Production-Line-for-Sale.jpg'

    },
    {
        id: 6,
        title: 'Automatic Door Projects',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus aut natus repudiandae illo dignissimos cum, quidem, molestias officia impedit omnis, quas repellat totam nesciunt iusto modi a eligendi magni!',
        list1: '2.5KVA Inverter',
        list2: '1.5KVA Inverter',
        list3: 'Inverter Powered Grid',
        list4: 'Inverter Tracker',
        image: 'https://image.made-in-china.com/2f0j00dvDiVjJMpzcK/Digital-Camera-Assembly-Line-Camera-Production-Line-for-Sale.jpg'

    }
]

export default ProjectList