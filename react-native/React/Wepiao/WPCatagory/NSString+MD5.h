//
//  NSString+MD5.h
//  Pods
//
//  Created by 窦静轩 on 2017/1/9.
//
//

#import<Foundation/Foundation.h>
@interface NSString (md5)
- (NSString *) md5;
-(NSString*)getFileMD5WithPath:(NSString*)path;
@end
