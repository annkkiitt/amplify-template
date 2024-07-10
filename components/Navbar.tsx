import { Divider, Flex, Menu, MenuItem, View } from "@aws-amplify/ui-react";
import React from "react";

const Navbar = ({signOut}: {signOut: React.ReactNode}) =>{
    return(
            <View
                as="div"
                ariaLabel="View example"
                backgroundColor="var(--amplify-colors-white)"
                borderRadius="6px"
                boxShadow="1px 1px 3px 3px var(--amplify-colors-neutral-60)"
                color="var(--amplify-colors-blue-60)"
                height="5rem"
                maxWidth="100%"
                padding="1rem"
                width="100%"
                >
                <Flex
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                    alignContent="flex-start"
                    wrap="nowrap"
                    gap="2rem"
                    >
                    <View>
                        ORGANIZATION NAME 
                    </View>

                    <View>
                        <Flex
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="stretch"
                            alignContent="flex-start"
                            wrap="nowrap"
                            gap="1rem"
                            >
                            <div>
                                Home
                            </div>
                            <div>
                                Contacts
                            </div>
                            <div>
                                About Us
                            </div>
                        </Flex>
                    </View>  

                    <View>
                    <Menu
                        menuAlign="start"
                        >
                        <MenuItem onClick={() => alert('Download')}>
                            Download
                        </MenuItem>
                        <MenuItem onClick={() => alert('Create a Copy')}>
                            Create a Copy
                        </MenuItem>
                        <MenuItem onClick={() => alert('Mark as Draft')}>
                            Mark as Draft
                        </MenuItem>
                        <Divider />
                        <MenuItem isDisabled onClick={() => alert('Delete')}>
                            Delete
                        </MenuItem>
                        <MenuItem onClick={() => signOut}>
                            Sign Out
                        </MenuItem>
                        </Menu>
                    </View>           
                </Flex>
            </View>            
    )
}

export default Navbar;