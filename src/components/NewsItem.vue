    <template>
    <div class="news-items">
      <div class="details">
        <slot name="pic"></slot>
        <div class="detail-info">
            <a href="">
              <slot name="title"></slot>
            </a>
            <p>
                <slot name="desc"></slot>
            </p>
        </div>
      </div>
    </div>
    </template>
  
  <style scoped>
  .news-items {
    margin-top: 2rem;
    display: block;
    position: relative;
    background: #fff;
    color: #333;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 2px 3px 8px -3px #000;
  }
  .details {
    flex: 1;
    
  }
  
  .details .title{
    color: #333;
    text-align: center;
  }
  .details a{
    text-align: center;
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    }
    .details a:hover{color: #333; background: transparent;}  
    .detail-info{padding: 10px 10px 20px;text-align: center;}

  @media (min-width: 1024px) {
    
  }
  </style>
  