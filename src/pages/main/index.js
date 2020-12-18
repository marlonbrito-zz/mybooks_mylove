import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Carousel from 'react-native-snap-carousel';
import Stars from 'react-native-stars';

function App(){

const [data, setData] =  useState('')
  
setData({
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
          stars: 4
        },
        {
          title: "Item 2",
          text: "Text 2",
          stars: 4.5
        },
        {
          title: "Item 3",
          text: "Text 3",
          stars: 3.5
        },
        {
          title: "Item 4",
          text: "Text 4",
          stars: 5
        },
        {
          title: "Item 5",
          text: "Text 5",
          stars: 1
        },
      ]
    })
  

  const _renderItem = ({ item, index }) =>{
    return (
      <View style={styles.card}>
        <Text style={styles.cardtext}>{item.title}</Text>
        <View style={{ alignItems: 'center' }}>
          <Stars
            default={item.stars}
            count={5}
            half={true}
            starSize={50}
            fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
          />
        </View>

      </View>

    )
  }
  
    return (
      <>
        <View style={styles.container}>
          <View style={styles.cardTitle}>
            <Text style={styles.cardtext}>Um amor de cinema</Text>
            <View style={{ alignItems: 'center' }}>
              <Stars
                default={2.5}
                count={5}
                half={true}
                starSize={50}
                fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
              />
            </View>

          </View>

          <View style={styles.carrossel}>
            <Carousel
              layout={'stack'}
              ref={ref => this.carousel = ref}
              data={data.carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={_renderItem}
              onSnapToItem={index => setData({ activeIndex: index })} />
          </View>

          <View style={styles.cardinsert}>
            <Text style={styles.cardtextinsert}>
              Adicionar
              </Text>
              <Text>
             <Icon size={30} name={'hospital-box-outline'} />
          </Text>
          <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={(text) => { navigation.navigate('bookInsert')  }}>
          <Text style={styles.cardtextinsert}>
              Livro
              </Text>
              </TouchableOpacity>
          </View>
        </View>


      </>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  cardtext: {
    fontSize: 20
  },
  cardtextinsert: {
    fontSize: 14
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  card: {

    backgroundColor: '#C0C1C2',
    borderRadius: 5,
    height: '25%',
    width: '50%',
    padding: 50,
    margin: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1

  },  
  cardTitle: {

    backgroundColor: '#C0C1C2',
    borderRadius: 5,
    height: '40%',
    width: '50%',
    padding: 50,
    margin: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1

  },
  carrossel: {
    flex: 1,
    //height: '40%',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  cardinsert: {
    backgroundColor: '#C0C1C2',
    borderRadius: 5,
    height: '15%',
    width: '50%',
    padding: 50,
    margin: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  }
});

export default App;