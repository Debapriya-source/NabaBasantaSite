/* eslint-disable */
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import StrongButton from '../../components/Button/StrongButton'
import { useFeats } from '../../hooks/useFeats'
import { useGlobal } from '../../hooks/useGlobal'

const Cta = () => {
  const { t } = useTranslation()
  const feats = useFeats()
  const global = useGlobal()
  return (
    <section className="cta-section pt-115 pb-160">
      <div className="container">
        <div className="cta-inner">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-9 col-10 order-2 order-lg-1">
              <div className="cta-text">
                {/* <div className="section-title mb-20">
                  <span className="title-tag">
                    {t('Elegance and refinement')}
                  </span>
                  <h2>{t('The refuge of your hike')}</h2>
                </div> */}
                {/* <p>
                  <Trans
                    i18nKey="La foresteria Antica Farmacia è un luogo raffinato, che <b>rispetta le origini e la storia</b> della zona di Cedegolo. Concediti un momento di piacere fuori dal caos della città."
                    components={{ b: <b /> }}
                  />
                </p> */}
                <Link to={global.contacts.whatsapp.href}>
                  <StrongButton
                    label={t('Contact us')}
                    muted={t('With whatsapp')}
                    icon="fab fa-whatsapp"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 col-sm-11 col-10 order-1 order-lg-2">
              <div className="cta-features">
                {feats.map((feat, i) => (
                  <div key={feat.id} className="single-feature">
                    <div className="icon">
                      <i className={feat.icon} />
                    </div>
                    <div className="cta-desc">
                      <h3>{feat.title}</h3>
                      <p>{feat.desc}</p>
                      <span className="count">0{1 + i}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
