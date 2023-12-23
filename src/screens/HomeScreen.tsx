import { View, Text, ScrollView, SafeAreaView,FlatList, Image, TouchableOpacity, TextInput, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import MasonryList from 'reanimated-masonry-list';

const uri = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const Categories=[
    "All",
    "Sofa",
    "Park Bench",
    "Armchair",
    "Dining Table",
    "Bean Bag",
    "Coffee Table",
    "Bookshelf",
    "Cupboard",
    "Wardrobe",
    "Bed",
    "Mattress",
]


const HomeScreen = () => {
    const {colors}=useTheme()
    const [categoryIndex,setCategoryIndex]=React.useState(0)
    return (
        <ScrollView>
            <SafeAreaView style={{paddingVertical: 24,gap:24}}>
                {/* Header Section */}
                <View style={{ paddingHorizontal: 24, flexDirection: "row", alignItems: "center", gap: 8,}}>
                    <Image source={{ uri }} style={{ width: 50, aspectRatio: 1, borderRadius: 52 }} resizeMode='cover' />

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 4,color:colors.text }} numberOfLines={1}>Hi, James</Text>
                        <Text style={{color:colors.text,opacity:0.5}}>What do you want to buy today?</Text>
                    </View>
                    <TouchableOpacity style={{ alignContent:"center", justifyContent:"center",width:52,aspectRatio:1, alignItems:"center",borderRadius:52,borderWidth:1,borderColor:colors.border}}>
                        <Icon name="notifications-none" size={24} color={colors.text} />
                    </TouchableOpacity>


                </View>

                {/* Search Section */}

                <View style={{flexDirection:"row",paddingHorizontal:24,gap:12,}}>
                    <TouchableOpacity style={{flexDirection:"row",flex:1,height:52,borderRadius:52,borderWidth:1,paddingHorizontal:24,gap:12,borderColor:colors.border,alignItems:"center"}}>
                        <Icon name="search" size={30} color={colors.border} />
                        <TextInput style={{flex:1}} placeholder="Search" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:52,aspectRatio:1,borderRadius:52,backgroundColor:colors.text,alignItems:"center",justifyContent:"center"}}>
                        <Icon name="tune" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
                
                {/* Grid Collection Section */}
                <View style={{paddingHorizontal:24}}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <Text style={{fontSize:15,fontWeight:"600",color:colors.text}}>New Collections</Text>
                        <TouchableOpacity>
                            <Text style={{color:colors.text}}>View All</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection:"row",height:250,gap:24,marginTop:10}} >
                        <View style={{flex:1,}}>
                            <Image source={{uri}} style={{flex:1,borderRadius:20}} resizeMode="cover"  />
                            <Text style={{fontSize:15,fontWeight:"600",color:colors.text,position:"absolute",left:15,top:10}}>$130</Text>
                        </View>
                        <View style={{flex:0.6,gap:24}}>
                                <View style={{flex:1,backgroundColor:"blue",borderRadius:20}}>
                                    <Image source={{uri}} style={{flex:1,borderRadius:20}} resizeMode="cover"  />
                                    <Text style={{fontSize:15,fontWeight:"600",color:colors.text,position:"absolute",left:15,top:10}}>$130</Text>
                                </View>
                                <View style={{flex:1,backgroundColor:"blue",borderRadius:20}}>
                                    <Image source={{uri}} style={{flex:1,borderRadius:20}} resizeMode="cover"  />
                                    <Text style={{fontSize:15,fontWeight:"600",color:colors.text,position:"absolute",left:15,top:10}}>$130</Text>
                                </View>
                        </View>

                    </View>


                </View>

                {/* Categories Section */}
                <FlatList
                
                data={Categories}
                horizontal
                contentContainerStyle={{paddingHorizontal:16}}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>{
                    const isSelected=categoryIndex===index
                    return(
                        <TouchableOpacity onPress={()=>setCategoryIndex(index)} style={{paddingHorizontal:24,paddingVertical:16,backgroundColor:isSelected?colors.text:"#fff",borderRadius:100,marginRight:12}}>
                        
                            <Text style={{color:isSelected?colors.background:colors.text,fontWeight:"600"}}>

                            {item}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
                />

                {/* Products Section */}
                <MasonryList
  data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}]}
  keyExtractor={(item): string => item.id}
  numColumns={2}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{paddingHorizontal:24}}
    

  renderItem={({item,i}:any) => (
  <View style={{aspectRatio: i===0 ? 1 : 2/3,position:"relative",overflow:"hidden",marginTop:12,backgroundColor:"red",borderRadius:20}}>


<Image source={{uri:"https://images.unsplash.com/photo-1701743804871-e2c24263696b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} resizeMode='cover' style={StyleSheet.absoluteFill} />
    <View style={[StyleSheet.absoluteFill]}>
        <View style={{flexDirection:"row",padding:12}}>
            <View style={{flex:1}}>
                <Text style={{flex:1,fontSize:18,color:"#fff"}}>

            Puma EveryDay
                </Text>
            </View>
        </View>

    </View>
  </View>
  
  )}

  
/>

            </SafeAreaView>
        </ScrollView>
    )
}

export default HomeScreen