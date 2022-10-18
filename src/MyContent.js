import { Layout } from 'antd'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from './RouterSettings'
import "./scripts.css";

function MyContent() {
  return (
    <Layout.Content style={{ margin: '24px 16px 0' }}>
      <div className="site-layout-background" style={{ backgroundColor:'#fff', padding: 24 }}>
      <Routes>
        {
          routerConfig && routerConfig.map((item, key) => {
            return <Route key={key} path={item.path} element={item.element} />
          })
        }
      </Routes>
      </div>
    </Layout.Content>
  )
}

export default MyContent