import React, { Component } from 'react';
import './DescriprionSpecialist.css';

export default class DescriprionSpecialist extends Component {
    state = {
        docsInfo: [
            {
                title: 'therapist',
                info: 'Врач-терапевт - специалист общей практики. Он ведет прием пациентов, составляет анамнез, при необходимости отправляет больных к узким   специалистам. Терапевты владеют передовыми методами диагностики, являются хорошими коммуникаторами.',
                bg: 'therapist-bg'
            },

            {
                title: 'surgeon',
                info: 'Хирург – врач, выполняющий оперативные вмешательства, специализируется на диагностике и лечении травм, заболеваний, патологических процессов разного характера.',
                bg: 'surgeon-bg'
            },

            {
                title: 'dentist',
                info: 'Стоматолог – это врач, специализирующийся на лечении болезней и повреждений зубов, челюстей и других органов ротовой полости и челюстно-лицевой области.',
                bg: 'dentist-bg'
            },

            {
                title: 'oculist',
                info: 'Офтальмолог — врач, специализирующийся на диагностике и лечении болезней глаз.',
                bg: 'oculist-bg'
            },

            {
                title: 'psychologist',
                info: 'Психиатр — врач, специализирующийся на диагностике и лечении психических расстройств.',
                bg: 'psichologist-bg'
            },

            {
                title: 'cardiologist',
                info: 'Кардиолог является врачом, который специализируется на исследованиях, лечении, диагностике заболеваний, поражающих сердечно-сосудистую систему. Также он занимается медицинской реабилитацией пациентов с хроническими заболеваниями.',
                bg: 'cardiologist-bg'
            },

            {
                title: 'dietologist',
                info: 'Диетолог — врач, специализирующийся на укреплении здоровья с помощью правильно подобранного питания.',
                bg: 'dietologist-bg'
            },

            {
                title: 'ent',
                info: 'Отоларинголог или сокращенно ЛОР — врач, специалист по лечению болезней уха, горла и носа.',
                bg: 'ent-bg'
            },

            {
                title: 'allergist',
                info: 'Аллерголог — это врач, специализирующийся  на выявлении аллергических заболеваний и их лечении.',
                bg: 'allergist-bg'
            },
        ]
    }

    render() {
        const { spec } = this.props;
        const { docsInfo } = this.state;
        const element = docsInfo.map(({ title, info, bg }) => {
            if (spec === title) {
                return <div className={`description ${bg}`} key={spec}>{info}</div>
            }
            return null;
        });

        return (
            <div>{element}</div>
        )
    }
}
