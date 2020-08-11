const specialists = [
    {
        title: 'Терапевт',
        key: 'therapist',
        docs: [
            {
                name: 'Терапевт-1', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
            {
                name: 'Терапевт-2', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
        ]
    },
    {
        title: 'Хирург',
        key: 'surgeon',
        docs: [
            {
                name: 'Хирург-1', graph: {
                    1: { '11:00': false, '11:15': true, '11:30': false, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
            {
                name: 'Хирург-2', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
        ]
    },
    {
        title: 'Стоматолог',
        key: 'dentist',
        docs: [
            {
                name: 'Стоматолог-1', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
            {
                name: 'Стоматолог-2', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
        ]
    },
    {
        title: 'Офтальмолог',
        key: 'oculist',
        docs: [
            {
                name: 'Офтальмолог-1', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
            {
                name: 'Офтальмолог-2', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
        ]
    },
    {
        title: 'Психиатор',
        key: 'psychologist',
        docs: [
            {
                name: 'Психиатор-1', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
            {
                name: 'Психиатор-2', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
        ]
    },
    {
        title: 'Кардиолог',
        key: 'cardiologist',
        docs: [
            {
                name: 'Кардиолог-1', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
            {
                name: 'Кардиолог-2', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
        ]
    },
    {
        title: 'Диетолог',
        key: 'dietologist',
        docs: [
            {
                name: 'Диетолог-1', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
            {
                name: 'Диетолог-2', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
        ]
    },
    {
        title: 'Отоларинголог',
        key: 'ent',
        docs: [
            {
                name: 'Отоларинголог-1', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
            {
                name: 'Отоларинголог-2', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
        ]
    },
    {
        title: 'Аллерголог',
        key: 'allergist',
        docs: [
            {
                name: 'Аллерголог-1', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
            {
                name: 'Аллерголог-2', graph: {
                    1: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    2: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    3: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    4: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    5: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    6: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                    7: { '11:00': true, '11:15': true, '11:30': true, '11:45': true, '12:00': true, '12:15': true, '12:30': true, '12:45': true, '13:00': true, '13:15': true, '13:30': true, '13:45': true, '14:00': true, '14:15': true, '14:30': true, '14:45': true, '15:00': true, '15:15': true, '15:30': true, '15:45': true, '16:00': true, '16:15': true, '16:30': true, '16:45': true },
                }
            },
        ]
    },
]

export default specialists;

