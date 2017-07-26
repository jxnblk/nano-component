import React from 'react'

class Tweet extends React.Component {
  componentDidMount () {
    if (typeof twttr !== 'undefined') {
      twttr.widgets.load(
        this.root
      )
    }
  }

  render () {
    return (
      <a
        ref={ref => this.root = ref}
        className='twitter-share-button'
        href='https://twitter.com/intent/tweet?text=Fast%20and%20simple%20React%20component%20styles%20in%20under%201kb&via=jxnblk'
        children='Tweet'
      />
    )
  }
}

export default Tweet
